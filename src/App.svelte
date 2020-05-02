<script>
  import { getRadiusPoints, pointToString } from "./polygon";

  let imageStyle = "";
  let newPoints = [];
  let polygon = "";
  let circlePoints = [];
  let points = [];
  let radius = 20;
  let step = 10;

  const changeStep = (s) => {
    const ns = Number(s)
    if (isNaN(ns) || ns < 0) {
      return 1
    }
    return ns > 180 ? 180 : ns
  }

  const changeRadius = (r) => {
    const nr = Number(r)
    if (isNaN(r) || r < 0) {
      return 1
    }
    return nr > 200 ? 200 : nr
  }

  $: points = [
    { x: 0, y: 40, isRadius: true, unit: "px" },
    { x: 400, y: 0, isRadius: true, unit: "px" },
    { x: 400, y: 200, isRadius: true, unit: "px" },
    { x: 0, y: 160, isRadius: true, unit: "px" }
  ];

  let handleOnChange = (event, key, i) => {
    const value = Number(event.target.value);
    if (isNaN(value)) {
      return;
    }
    points[i][key] = value;
  };

  $: circlePoints = points.reduce((acc, point, index) => {
    if (!point.isRadius) {
      return [...acc, point];
    }
    const indexBefore = index === 0 ? points.length - 1 : index - 1;
    const indexAfter = index === points.length - 1 ? 0 : index + 1;
    const Aprim = point;
    const Bprim = points[indexAfter];
    const Cprim = points[indexBefore];
    const radiusPoints = getRadiusPoints(Aprim, Bprim, Cprim, radius, 400, 200, step);

    return [...acc, ...radiusPoints];
  }, []);

  $: polygon = circlePoints.map(pointToString).join(",");
  $: imageStyle = `clip-path: polygon(${polygon})`;
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
  }

  .home__title {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
    text-align: center;
  }

  .home__container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .home__image_container {
    padding: 40px;
    background-color: rgba(40, 40, 40, 0.1);
  }
  .home__image_container__placeholder {
    height: 200px;
    width: 400px;
    background-color: rgba(26, 10, 145, 0.3);
  }

  .home__controls {
    padding: 0 30px;
  }

  .home__controls__title {
    font-size: 18px;
  }

  .home__controls__control {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .home__controls__control__title {
    margin: 0 5px;
    font-size: 18px;
  }

  .home__controls__control__label {
    font-size: 18px;
  }

  .home__controls__control__input {
    width: 50px;
    margin: 0 5px;
  }

  .home__controls__control__unit {
    margin-right: auto;
  }

  .home__result_container {
    text-align: center;
    margin-top: 30px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main class="home">
  <h1 class="home__title">Generate polygon<br/> with rounded corners</h1>
  <div class="home__container">
    <div class="home__image_container">
      <div class="home__image_container__placeholder" style={imageStyle} />
    </div>
    <div class="home__controls">
      <p class="home__controls__title">Points</p>
      <div class="home__controls__control">
        <label class="home__controls__control__label" for="set_radius">
          Radius:
        </label>
        <input
          type="tel"
          class="home__controls__control__input"
          id="set_radius"
          value={radius}
          on:change={event => radius = changeRadius(event.target.value)}
           />
        <span class="home__controls__control__unit">px</span>
      </div>
      <div class="home__controls__control">
        <label class="home__controls__control__label" for="set_step">
          Step:
        </label>
        <input
          type="tel"
          class="home__controls__control__input
          home__controls__control__input--left"
          id="set_step"
          value={step}
          on:change={event => step = changeStep(event.target.value)}
           />
        <span class="home__controls__control__unit">°</span>
      </div>
      {#each points as { x, y }, i}
        <div class="home__controls__control">
          <p class="home__controls__control__title">{i + 1}.</p>
          <label class="home__controls__control__label" for="point_{i}_x">
            x:
          </label>
          <input
            type="tel"
            class="home__controls__control__input"
            id="point_{i}_x"
            value={points[i].x}
            on:change={event => handleOnChange(event, 'x', i)} />
          <label class="home__controls__control__label" for="point_{i}_y">
            y:
          </label>
          <input
            type="tel"
            class="home__controls__control__input"
            id="point_{i}_y"
            value={points[i].y}
            on:change={event => handleOnChange(event, 'y', i)} />
          <label class="home__controls__control__label" for="point_{i}_radius">
            r:
          </label>
          <input
            type="checkbox"
            class="home__controls__control__input"
            id="point_{i}_radius"
            bind:checked={points[i].isRadius} />
        </div>
      {/each}
    </div>
  </div>
  <div class="home__result_container">{imageStyle}</div>
</main>
