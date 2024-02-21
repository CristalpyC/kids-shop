import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart() {
  return (
    <Badge badgeContent={1} color="secondary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}