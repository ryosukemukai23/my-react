import PropType from "prop-types";

function Myhello(props) {
  return <div>こんにちは、{props.name}さん</div>;
}

Myhello.propTypes = {
  name: PropType.string.isRequired,
};

export default Myhello;
