import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";

export default function SizeChart() {
  const sizes = [
    { label: "S", chest: "36-38", waist: "30-32", sleeve: "32.5" },
    { label: "M", chest: "39-41", waist: "33-35", sleeve: "33.5" },
    { label: "L", chest: "42-44", waist: "36-38", sleeve: "34.5" },
    { label: "XL", chest: "45-47", waist: "39-41", sleeve: "35.5" },
    { label: "XXL", chest: "48-50", waist: "42-44", sleeve: "36.5" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Ruler className="h-4 w-4" />
          Size Chart
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit with our detailed size measurements (inches).
          </DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Size</TableHead>
              <TableHead className="font-bold">Chest</TableHead>
              <TableHead className="font-bold">Waist</TableHead>
              <TableHead className="font-bold">Sleeve Length</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizes.map((size) => (
              <TableRow key={size.label}>
                <TableCell className="font-medium">{size.label}</TableCell>
                <TableCell>{size.chest}</TableCell>
                <TableCell>{size.waist}</TableCell>
                <TableCell>{size.sleeve}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 p-4 bg-muted rounded-sm text-sm italic">
          *Measurements are in inches. For the best fit, we recommend measuring
          a similar garment you already own.
        </div>
      </DialogContent>
    </Dialog>
  );
}
