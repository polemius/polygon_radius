<script>
  import { getRadiusPoints, pointToString } from "./polygon";

  let imageStyle = "";
  let newPoints = [];
  let polygon = "";
  let circlePoints = [];
  let points = [];
  let radius = 20;

  $: points = [
    { x: 0, y: 0, isRadius: false, unit: "px" },
    { x: 400, y: 0, isRadius: false, unit: "px" },
    { x: 400, y: 200, isRadius: false, unit: "px" },
    { x: 0, y: 200, isRadius: false, unit: "px" }
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
    const Cprim = point;
    const Dprim = points[indexBefore];
    console.log({Aprim, Bprim, Cprim, Dprim})
    const radiusPoints = getRadiusPoints(Aprim, Bprim, Cprim, Dprim, radius, 400, index > 1 ? Aprim.y : 200, 200);

    return [...acc, ...radiusPoints];
  }, []);

  $: polygon = circlePoints.map(pointToString).join(",");
  $: imageStyle = `clip-path: polygon(${polygon})`;
</script>

<style>
  .home {
    /* text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto; */
    display: flex;
    flex-direction: column;
  }

  .home__title {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }

  .home__container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .home__image_container {
    padding: 30px;
    background-color: rgba(40, 40, 40, 0.1);
  }
  .home__image_container__image {
    height: 200px;
    width: 400px;
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
  <h1 class="home__title">Radius polygon</h1>
  <div class="home__container">
    <div class="home__image_container">
      <img
        class="home__image_container__image"
        style={imageStyle}
        src="http://placekitten.com/g/400/200"
        alt="Image for position points for polygon from clip-path" />
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
          bind:value={radius} />
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
  <div class="home__result_container">
    {imageStyle}
  </div>
</main>
