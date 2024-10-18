type serviceTitle = {
  title: string;
};
export const Service = ({ title }: serviceTitle) => {
  return (
    <div className="box">
      <i className="fas fa-user-shield fa-4x"></i>
      <h3>{title}</h3>
      <div className="info">
        <a href="#">Details</a>
      </div>
    </div>
  );
};
