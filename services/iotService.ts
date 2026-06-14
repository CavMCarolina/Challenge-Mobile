import { io, Socket } from 'socket.io-client';
import * as Network from 'expo-network';
import { IoTStatus, SensorData } from '../types';

const PORT = 3001;

type SensorCallback = (data: SensorData) => void;
type StatusCallback = (status: IoTStatus) => void;

async function tentarIP(ip: string): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 1500);
  try {
    const res = await fetch(`http://${ip}:${PORT}/caretrack-ping`, { signal: controller.signal });
    const json = await res.json();
    if (json?.service === 'caretrack-iot') return `${ip}:${PORT}`;
  } catch {
    // não responde
  } finally {
    clearTimeout(timer);
  }
  return null;
}

async function descobrirServidor(): Promise<string | null> {
  const info = await Network.getNetworkStateAsync();
  if (!info.isConnected) return null;

  const ipInfo = await Network.getIpAddressAsync();
  const partes = ipInfo.split('.');
  if (partes.length !== 4) return null;

  const subnet = `${partes[0]}.${partes[1]}.${partes[2]}.`;

  // Faixas mais prováveis para PCs em DHCP, em lotes de 20
  const faixas = [
    ...Array.from({ length: 30 }, (_, i) => i + 1), // .1–.30
    ...Array.from({ length: 50 }, (_, i) => i + 100), // .100–.149
    ...Array.from({ length: 50 }, (_, i) => i + 150), // .150–.199
    ...Array.from({ length: 70 }, (_, i) => i + 31), // .31–.99 e .200–.254
    ...Array.from({ length: 55 }, (_, i) => i + 200),
  ];

  const LOTE = 20;
  for (let i = 0; i < faixas.length; i += LOTE) {
    const lote = faixas.slice(i, i + LOTE);
    const resultados = await Promise.all(lote.map(n => tentarIP(`${subnet}${n}`)));
    const encontrado = resultados.find(r => r !== null);
    if (encontrado) return encontrado;
  }
  return null;
}

class IoTService {
  private socket: Socket | null = null;
  private sensorCallback: SensorCallback | null = null;
  private statusCallback: StatusCallback | null = null;

  async conectarIP(): Promise<void> {
    this.statusCallback?.('conectando');
    const ip = await descobrirServidor();
    if (!ip) {
      this.statusCallback?.('erro');
      return;
    }
    this.conectar(ip);
  }

  conectar(ip: string): void {
    if (this.socket?.connected) return;

    this.socket?.disconnect();
    this.statusCallback?.('conectando');

    this.socket = io(`http://${ip}`, {
      transports: ['websocket'],
      reconnectionAttempts: 3,
      timeout: 6000,
    });

    this.socket.on('connect', () => {
      this.statusCallback?.('conectado');
    });

    this.socket.on('sensor_data', (data: SensorData) => {
      this.sensorCallback?.(data);
    });

    this.socket.on('disconnect', () => {
      this.statusCallback?.('desconectado');
    });

    this.socket.on('connect_error', () => {
      this.statusCallback?.('erro');
      this.socket?.disconnect();
    });
  }

  desconectar(): void {
    this.socket?.disconnect();
    this.socket = null;
    this.statusCallback?.('desconectado');
  }

  onSensorData(callback: SensorCallback): void {
    this.sensorCallback = callback;
  }

  onStatusChange(callback: StatusCallback): void {
    this.statusCallback = callback;
  }

  isConnected(): boolean {
    return this.socket?.connected ?? false;
  }
}

export const iotService = new IoTService();
