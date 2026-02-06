import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import useTranslation from '../../hooks/useTranslation'

function EfficiencyChart({ data }) {
  const { locale } = useTranslation()

  const formattedData = data.map(item => ({
    name: item.name,
    before: item.before,
    after: item.after,
    reduction: Math.round((1 - item.after / item.before) * 100)
  }))

  const beforeLabel = locale === 'ko' ? '기존' : 'Before'
  const afterLabel = locale === 'ko' ? 'AI 적용' : 'With AI'

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
            label={{
              value: data[0]?.unit || 'hours',
              angle: -90,
              position: 'insideLeft',
              fill: '#6B7280'
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value, name) => [
              `${value} ${data[0]?.unit || 'hours'}`,
              name === 'before' ? beforeLabel : afterLabel
            ]}
          />
          <Legend
            formatter={(value) => value === 'before' ? beforeLabel : afterLabel}
          />
          <Bar
            dataKey="before"
            fill="#94A3B8"
            radius={[4, 4, 0, 0]}
            name="before"
          />
          <Bar
            dataKey="after"
            fill="#4F46E5"
            radius={[4, 4, 0, 0]}
            name="after"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EfficiencyChart
