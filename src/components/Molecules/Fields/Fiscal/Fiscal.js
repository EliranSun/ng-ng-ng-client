import { Input, InputType } from "../../../atoms";

const Regions = [
  "Andalucía",
  "Aragón",
  "Asturias",
  "Canarias",
  "Cantabria",
  "Castilla - La Mancha",
  "Castilla y León",
  "Cataluña",
  "Ceuta",
  "Diputación Foral de Álava",
  "Diputación Foral de Guipúzcoa",
  "Diputación Foral de Navarra",
  "Diputación Foral de Vizcaya",
  "Extremadura",
  "Galicia",
  "Illes Balears",
  "La Rioja",
  "Madrid",
  "Melilla",
  "Murcia",
  "Valencia",
];

const Fiscal = ({ ...rest }) => (
  <div className="p-r-20 p-l-20">
    <Input
      options={Regions}
      type={InputType.SELECT}
      placeholder="Región Fiscal"
      validate={(value) => value !== ""}
      {...rest}
    />
  </div>
);

export default Fiscal;
