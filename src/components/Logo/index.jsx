import { Container } from "./styles";

export function Logo() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Container>
      <h1 onClick={topFunction}>
        &lt; <span>Silvio</span> Cesar /&gt;
      </h1>
    </Container>
  );
}
