import React from "react";
import { IBox } from "../../Containers/Container.interface";
import { IColumn } from "../../Containers/Column/Column.interface";

export interface TdProps extends React.HTMLAttributes<HTMLTableCellElement>, IBox, IColumn{}