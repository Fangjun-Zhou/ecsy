import { PropType } from "./Types";
import { EventEmitter } from "events";

/**
 * Base class for components.
 */

export type ComponentSchemaProp = {
  default?: any;
  type: PropType<any, any>;
};

export type ComponentSchema = {
  [propName: string]: ComponentSchemaProp;
};

export class Component<C> {
  static schema: ComponentSchema;
  static isComponent: true;
  constructor(props?: Partial<Omit<C, keyof Component<any>>> | false);
  eventEmitter: EventEmitter;
  copy(source: this): this;
  clone(): this;
  reset(): void;
  dispose(): void;

  /**
   * Custom inspector implementation for the component.
   *
   * @param componentDiv the div element that will contain the inspector.
   * @param onComponentChanged callback that will be called when the component is changed.
   */
  onInspector: (componentDiv: HTMLDivElement) => void | null;

  /**
   * If keep the default inspector for the component.
   */
  useDefaultInspector: boolean;
}

export interface ComponentConstructor<C extends Component<any>> {
  schema: ComponentSchema;
  isComponent: true;
  new (props?: Partial<Omit<C, keyof Component<any>>> | false): C;
}

export const COMPONENT_CHANGE_EVENT;
