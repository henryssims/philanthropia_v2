import React from 'react';
import { Button } from '@/components/ui/button';

export default function CauseButton({
 cause, selected, onClick
} : {
  cause: string,
  selected: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Button variant={selected ? "default" : "outline"} onClick={onClick}>{cause.replace("-", " ")}</Button>
  );
}