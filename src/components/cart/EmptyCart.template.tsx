// TEMPLATE - Silakan copy dan modifikasi sesuai kebutuhan

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors, spacing, typography } from '../../theme';
import { CartItem as CartItemType } from '../../types';

interface EmptyCartProps {
  message?: string;
}

export const EmptyCart: React.FC<EmptyCartProps> = ({
  message = 'Keranjang masih kosong',
}) => {
  return (
    <View style={styles.container}>
      {/* TODO: Add cart icon here */}
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>🛒</Text>
      </View>
      
      <Text style={styles.title}>{message}</Text>
      <Text style={styles.subtitle}>
        Tambahkan produk dengan voice atau manual input
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.cartEmpty,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  iconText: {
    fontSize: 60,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
