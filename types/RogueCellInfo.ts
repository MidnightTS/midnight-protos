// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RogueCellInfo.proto" (syntax proto3)
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
import { RogueCellState } from "./RogueCellState";
/**
 * @generated from protobuf message RogueCellInfo
 */
export interface RogueCellInfo {
    /**
     * @generated from protobuf field: uint32 dungeon_id = 1;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: uint32 cell_config_id = 14;
     */
    cellConfigId: number;
    /**
     * @generated from protobuf field: uint32 cell_id = 2;
     */
    cellId: number;
    /**
     * @generated from protobuf field: RogueCellState state = 9;
     */
    state: RogueCellState;
    /**
     * @generated from protobuf field: uint32 cell_type = 13;
     */
    cellType: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RogueCellInfo$Type extends MessageType<RogueCellInfo> {
    constructor() {
        super("RogueCellInfo", [
            { no: 1, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cell_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "state", kind: "enum", T: () => ["RogueCellState", RogueCellState, "ROGUE_CELL_STATE_"] },
            { no: 13, name: "cell_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RogueCellInfo>): RogueCellInfo {
        const message = { dungeonId: 0, cellConfigId: 0, cellId: 0, state: 0, cellType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RogueCellInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueCellInfo): RogueCellInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 cell_config_id */ 14:
                    message.cellConfigId = reader.uint32();
                    break;
                case /* uint32 cell_id */ 2:
                    message.cellId = reader.uint32();
                    break;
                case /* RogueCellState state */ 9:
                    message.state = reader.int32();
                    break;
                case /* uint32 cell_type */ 13:
                    message.cellType = reader.uint32();
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
    internalBinaryWrite(message: RogueCellInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 dungeon_id = 1; */
        if (message.dungeonId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.dungeonId);
        /* uint32 cell_config_id = 14; */
        if (message.cellConfigId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.cellConfigId);
        /* uint32 cell_id = 2; */
        if (message.cellId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.cellId);
        /* RogueCellState state = 9; */
        if (message.state !== 0)
            writer.tag(9, WireType.Varint).int32(message.state);
        /* uint32 cell_type = 13; */
        if (message.cellType !== 0)
            writer.tag(13, WireType.Varint).uint32(message.cellType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueCellInfo
 */
export const RogueCellInfo = new RogueCellInfo$Type();
