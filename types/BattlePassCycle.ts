// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BattlePassCycle.proto" (syntax proto3)
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
 * @generated from protobuf message BattlePassCycle
 */
export interface BattlePassCycle {
    /**
     * @generated from protobuf field: uint32 end_time = 5;
     */
    endTime: number;
    /**
     * @generated from protobuf field: uint32 begin_time = 13;
     */
    beginTime: number;
    /**
     * @generated from protobuf field: uint32 cycle_idx = 15;
     */
    cycleIdx: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassCycle$Type extends MessageType<BattlePassCycle> {
    constructor() {
        super("BattlePassCycle", [
            { no: 5, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cycle_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BattlePassCycle>): BattlePassCycle {
        const message = { endTime: 0, beginTime: 0, cycleIdx: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BattlePassCycle>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BattlePassCycle): BattlePassCycle {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 end_time */ 5:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 begin_time */ 13:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 cycle_idx */ 15:
                    message.cycleIdx = reader.uint32();
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
    internalBinaryWrite(message: BattlePassCycle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 end_time = 5; */
        if (message.endTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.endTime);
        /* uint32 begin_time = 13; */
        if (message.beginTime !== 0)
            writer.tag(13, WireType.Varint).uint32(message.beginTime);
        /* uint32 cycle_idx = 15; */
        if (message.cycleIdx !== 0)
            writer.tag(15, WireType.Varint).uint32(message.cycleIdx);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassCycle
 */
export const BattlePassCycle = new BattlePassCycle$Type();
