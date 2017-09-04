# rc-steps

---

React steps component

## Development

```
npm install
npm start
```

## Usage

```jsx
<Steps current={1}>
  <Steps.Step title="first" />
  <Steps.Step title="second" />
  <Steps.Step title="third" />
</Steps>
```

## Example

http://localhost:8002/examples

online example: http://react-component.github.io/steps/examples/

## API

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>direction</td>
      <td>string</td>
      <td>horizontal</td>
      <td>direction of Steps, enum: `horizontal` or `vertical`</td>
    </tr>
    <tr>
      <td>current</td>
      <td>number</td>
      <td>0</td>
      <td>index of current step</td>
    </tr>
    <tr>
      <td>size</td>
      <td>string</td>
      <td></td>
      <td>size of Steps, could be `small`</td>
    </tr>
    <tr>
      <td>labelPlacement</td>
      <td>string</td>
      <td></td>
      <td>placement of step title, could be `vertical`</td>
    </tr>
    <tr>
      <td>status</td>
      <td>string</td>
      <td>wait</td>
      <td>status of current Steps, could be `error` `process` `finish` `wait`</td>
    </tr>
  </tbody>
</table>

### Steps.Step

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>ReactNode</td>
      <td></td>
      <td>title of step item</td>
    </tr>
    <tr>
      <td>description</td>
      <td>ReactNode</td>
      <td></td>
      <td>description of step item</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>ReactNode or string</td>
      <td></td>
      <td>set icon of step item</td>
    </tr>
    <tr>
      <td>status</td>
      <td>string</td>
      <td></td>
      <td>status of current Steps, could be `error` `process` `finish` `wait`</td>
    </tr>
  </tbody>
</table>

## License

rc-steps is released under the MIT license.
