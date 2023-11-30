import CSS from './index.module.css';

const Section = ({ title, children }) => (
  <section className={CSS.statSection}>
    <h2 className={CSS.sectionTitle}>{title}</h2>
    {children}
  </section>
);
export default Section;
