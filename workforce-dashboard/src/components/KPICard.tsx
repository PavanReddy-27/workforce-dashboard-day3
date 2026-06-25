interface Props {
  title: string;
  value: string | number;
}

const KPICard = ({ title, value }: Props) => {
  return (
    <div className="kpi-card">
      <div className="kpi-card-label">
        <h4>{title}</h4>
      </div>
      <div className="kpi-card-value">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default KPICard;