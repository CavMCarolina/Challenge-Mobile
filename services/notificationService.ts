import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
});

export const NotificationService = {
  async solicitarPermissao(): Promise<boolean> {
    const permissaoAtual = await Notifications.getPermissionsAsync() as unknown as { granted: boolean };
    if (permissaoAtual.granted) return true;

    const permissao = await Notifications.requestPermissionsAsync() as unknown as { granted: boolean };

    if (!permissao.granted) {
      Alert.alert(
        'Notificações desativadas',
        'Para receber lembretes de hábitos, ative as notificações nas configurações do dispositivo.',
        [{ text: 'OK' }]
      );
      return false;
    }

    return true;
  },

  async configurarLembretesDiarios(): Promise<void> {
    const permitido = await this.solicitarPermissao();
    if (!permitido) return;

    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'CareTrack – Hora dos seus hábitos!',
        body: 'Você já registrou seus hábitos saudáveis hoje? Ganhe pontos e suba no ranking!',
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 9,
        minute: 0,
      },
    });
  },

  async notificarHabitoAdicionado(nomeHabito: string): Promise<void> {
    const permitido = await this.solicitarPermissao();
    if (!permitido) return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hábito registrado! +30 pontos',
        body: `"${nomeHabito}" foi adicionado com sucesso. Continue assim!`,
        sound: true,
      },
      trigger: null,
    });
  },
};
