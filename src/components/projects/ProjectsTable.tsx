import { dummyData } from '../../app/ProjectsTab/Data';
import Card from './Card';

export default function ProjectsTable() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {dummyData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}