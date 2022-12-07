// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WidgetCoolDownData.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message WidgetCoolDownData
 */
export interface WidgetCoolDownData {
    /**
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
    /**
     * @generated from protobuf field: bool is_success = 13;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint64 cool_down_time = 7;
     */
    coolDownTime: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCoolDownData$Type extends MessageType<WidgetCoolDownData> {
    constructor() {
        super("WidgetCoolDownData", [
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "cool_down_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<WidgetCoolDownData>): WidgetCoolDownData {
        const message = { id: 0, isSuccess: false, coolDownTime: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WidgetCoolDownData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WidgetCoolDownData): WidgetCoolDownData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* bool is_success */ 13:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint64 cool_down_time */ 7:
                    message.coolDownTime = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: WidgetCoolDownData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, WireType.Varint).uint32(message.id);
        /* bool is_success = 13; */
        if (message.isSuccess !== false)
            writer.tag(13, WireType.Varint).bool(message.isSuccess);
        /* uint64 cool_down_time = 7; */
        if (message.coolDownTime !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.coolDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCoolDownData
 */
export const WidgetCoolDownData = new WidgetCoolDownData$Type();
