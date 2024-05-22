import Counter from './counter';

interface StatProps {
  number: number;
  suffix: string;
  text: string;
}

export default function Stats() {

  const stats: StatProps[] = [
    {
      number: 41,
      suffix: '',
      text: 'Total Nodes Running',
    },
    {
      number: 16,
      suffix: '+',
      text: 'Countries Supported',
    },
    {
      number: 857,
      suffix: 'TH/s',
      text: 'Network Hashrate',
    },
    {
      number: 100,
      suffix: 'M+',
      text: 'Transactions Processed',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto sm:px-6">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center">
            <h4 className="font-inter-tight text-md md:text-2xl font-bold tabular-nums mb-1">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-xs text-neutral-500">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
