import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface EcoCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EcoCalculatorModal = ({ isOpen, onClose }: EcoCalculatorModalProps) => {
  const [fuelType, setFuelType] = useState("");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState<{
    cost: number;
    ecoSaving: number;
    co2Reduction: number;
  } | null>(null);

  const fuelPrices = {
    "ai-92": { price: 52.8, ecoBonus: 0.15, co2Reduction: 0.2 },
    "ai-95": { price: 56.2, ecoBonus: 0.18, co2Reduction: 0.25 },
    "ai-98": { price: 62.9, ecoBonus: 0.22, co2Reduction: 0.3 },
    diesel: { price: 55.4, ecoBonus: 0.2, co2Reduction: 0.35 },
    gas: { price: 28.5, ecoBonus: 0.4, co2Reduction: 0.5 },
    bio: { price: 58.9, ecoBonus: 0.6, co2Reduction: 0.7 },
  };

  const calculateEcoFootprint = () => {
    if (!fuelType || !volume || parseFloat(volume) <= 0) return;

    const volumeNum = parseFloat(volume);
    const fuel = fuelPrices[fuelType as keyof typeof fuelPrices];

    const cost = volumeNum * fuel.price;
    const ecoSaving = cost * fuel.ecoBonus;
    const co2Reduction = volumeNum * fuel.co2Reduction * 2.3; // кг CO2

    setResult({ cost, ecoSaving, co2Reduction });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon name="Calculator" size={24} className="mr-2 text-green-600" />
            Калькулятор экоследа
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Тип топлива</Label>
            <Select value={fuelType} onValueChange={setFuelType}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип топлива" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-92">Бензин АИ-92 ЭКО</SelectItem>
                <SelectItem value="ai-95">Бензин АИ-95 ЭКО</SelectItem>
                <SelectItem value="ai-98">Бензин АИ-98 Премиум</SelectItem>
                <SelectItem value="diesel">ДТ Евро-5</SelectItem>
                <SelectItem value="gas">Метан КПГ</SelectItem>
                <SelectItem value="bio">Биодизель B20</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="volume">Объем (литры)</Label>
            <Input
              id="volume"
              type="number"
              placeholder="Введите количество литров"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>

          <Button
            onClick={calculateEcoFootprint}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Рассчитать
          </Button>

          {result && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg space-y-3">
              <h3 className="font-semibold text-green-800">
                Результат расчета:
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Стоимость топлива:</span>
                  <span className="font-bold">{result.cost.toFixed(2)} ₽</span>
                </div>

                <div className="flex justify-between">
                  <span>Экономия от эко-топлива:</span>
                  <span className="font-bold text-green-600">
                    {result.ecoSaving.toFixed(2)} ₽
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Снижение CO₂:</span>
                  <span className="font-bold text-green-600">
                    {result.co2Reduction.toFixed(1)} кг
                  </span>
                </div>
              </div>

              <div className="text-xs text-green-700 mt-3">
                💡 Ваш вклад в экологию эквивалентен посадке{" "}
                {Math.round(result.co2Reduction / 22)} деревьев!
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EcoCalculatorModal;
