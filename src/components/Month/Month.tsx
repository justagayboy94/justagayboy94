import React from "react";
import styled from "../../helpers/styled-components";

export interface Props {
  month: number;
  year: number;
  entries: Entry[];
}

interface Day {
  id: number;
  column: number;
  row: number;
  entries: Entry[];
}

interface Entry {
  day: number;
  color: string;
}

const StyledMonth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.month.gridGap}px;
`;

const Day = styled.div<{
  day: number;
  column: number;
  row: number;
  entries: Entry[];
}>`
  grid-column: ${props => props.column} / span 1;
  grid-row: ${props => props.row} / span 1;
  height: ${props => props.theme.month.day.height}px;
  background-color: ${props => props.theme.month.day.backgroundColor};
  padding: ${props => props.theme.month.day.padding}px;
  box-sizing: border-box;
  background: linear-gradient(to bottom right, ${props =>
    props.entries
      .map(
        (entry, i) =>
          `${entry.color} ${(i * 100) / props.entries.length}% ${((i + 1) *
            100) /
            props.entries.length}%`
      )
      .join(",")});

  &:before {
    content: '${props => props.day}';
    color: ${props => props.theme.month.day.color};
    display: block;
  }
`;

export class Month extends React.Component<Props> {
  get numberOfDays() {
    return new Date(this.props.year, this.props.month + 1, 0).getDate();
  }

  get days(): Day[] {
    return Array.from(Array(this.numberOfDays), (_, i) => ({
      column: ((this.firstDay + i) % 7) + 1,
      entries: this.props.entries.filter(entry => entry.day === i + 1),
      id: i + 1,
      row: Math.floor((this.firstDay + i) / 7) + 1
    }));
  }

  get firstDay() {
    const day = new Date(this.props.year, this.props.month, 1).getDay();

    return day === 0 ? 6 : day - 1;
  }

  public render() {
    return (
      <StyledMonth>
        {this.days.map(day => (
          <Day
            day={day.id}
            column={day.column}
            row={day.row}
            key={day.id}
            entries={day.entries}
          />
        ))}
      </StyledMonth>
    );
  }
}
