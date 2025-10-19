// TEMPLATE - Silakan copy dan modifikasi sesuai kebutuhan

import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors, spacing, typography } from '../../theme';

interface VoiceIndicatorProps {
  isRecording: boolean;
}

export const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({ isRecording }) => {
  // TODO: Add animation logic here
  // const pulseAnim = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      {isRecording ? (
        <>
          <View style={styles.recordingIndicator}>
            {/* TODO: Add animated pulse effect */}
            <View style={styles.pulse} />
          </View>
          <Text style={styles.text}>Siap Mendengarkan</Text>
          <Text style={styles.subtext}>
            Tekan tombol mikrofon dan ucapkan produk dengan harga
          </Text>
        </>
      ) : (
        <Text style={styles.instructionText}>
          Tekan tombol mikrofon untuk memulai
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xl,
  },
  recordingIndicator: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  pulse: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryLight,
  },
  text: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtext: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
  instructionText: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
