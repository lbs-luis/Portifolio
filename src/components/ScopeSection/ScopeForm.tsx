import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

interface ToogleMakerProps {
  label: string
  type: 'multiple' | 'single'
  values: { value: string; label: string }[]
  priceHandler: (id: number, value: number) => void
  id: number
}

const ToogleMaker = ({
  label,
  type,
  values,
  priceHandler,
  id,
}: ToogleMakerProps) => {
  return (
    <div className="flex flex-col w-fit h-fit">
      <label className="text-xl">{label}</label>
      <div className="flex self-start">
        <ToggleGroup type={type}>
          {values.map((value, index) => (
            <ToggleGroupItem
              id={`${index}-${value.value}`}
              className="text-lg"
              variant="outline"
              key={`${value.label}-${index}`}
              value={value.value}
              onClick={() => priceHandler(id, Number.parseInt(value.value))}
            >
              {value.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}

export const ScopeForm = () => {
  const [price, setPrice] = useState<Array<number>>([0, 0, 0])

  const formattedPrice = () => {
    const totalPrice = price.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalPrice)
  }

  const priceHandler = (id: number, value: number) => {
    setPrice((prevPrice) => {
      const newPrice = [...prevPrice]
      newPrice[id] = value
      return newPrice
    })
  }

  return (
    <div className="flex flex-col w-fit h-fit mx-auto">
      {/* linha 1 */}
      <div className="flex flex-col md:flex-row w-full h-fit gap-8 items-start md:items-center">
        <ToogleMaker
          label="Tipo do site"
          type="single"
          values={[
            { value: '3000', label: 'Institucional' },
            { value: '2000', label: 'Blog' },
            { value: '1500', label: 'Landing page' },
          ]}
          priceHandler={priceHandler}
          id={0}
        />
        <ToogleMaker
          label="Possui design próprio?"
          type="single"
          values={[
            { value: '900', label: 'não' },
            { value: '0', label: 'sim' },
          ]}
          priceHandler={priceHandler}
          id={1}
        />
        <ToogleMaker
          label="Inclui Google Ad Sense?"
          type="single"
          values={[
            { value: '0', label: 'não' },
            { value: '850', label: 'sim' },
          ]}
          priceHandler={priceHandler}
          id={2}
        />
      </div>
      <div className="flex flex-col w-fit h-fit self-center gap-2 items-center mt-20">
        <h2 className="text-3xl font-extrabold text-emerald-300">
          {formattedPrice()}
        </h2>
        <p className="flex text-xs">
          esse é um valor apróximado entre em contato para fechar negócio de
          forma precisa.
        </p>
      </div>
    </div>
  )
}
