['top', 'right', 'bottom', 'left'].map(placement => (
  <Overlay.Trigger
    key={placement}
    placement={placement}
    overlay={props => (
      <Tooltip id="tooltip-{placement}" {...props}>
        <b>Tooltips</b>
        {' '}
on
        {' '}
        <strong>{placement}</strong>
.
      </Tooltip>
    )}
  >
    <Button variant="secondary" className="u-marginHorizontalExtraSmall">
      Tooltip on
      {placement}
    </Button>
  </Overlay.Trigger>
));
