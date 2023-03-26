import { SummaryContainer, SummeryCard } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'
export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummeryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummeryCard>

      <SummeryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummeryCard>

      <SummeryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummeryCard>
    </SummaryContainer>
  )
}
