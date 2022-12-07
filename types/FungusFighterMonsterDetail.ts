// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FungusFighterMonsterDetail.proto" (syntax proto3)
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
 * @generated from protobuf message FungusFighterMonsterDetail
 */
export interface FungusFighterMonsterDetail {
    /**
     * @generated from protobuf field: float cur_hp_percentage = 9;
     */
    curHpPercentage: number;
    /**
     * @generated from protobuf field: bool is_alive = 10;
     */
    isAlive: boolean;
    /**
     * @generated from protobuf field: uint32 fungus_id = 13;
     */
    fungusId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterMonsterDetail$Type extends MessageType<FungusFighterMonsterDetail> {
    constructor() {
        super("FungusFighterMonsterDetail", [
            { no: 9, name: "cur_hp_percentage", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "is_alive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "fungus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FungusFighterMonsterDetail>): FungusFighterMonsterDetail {
        const message = { curHpPercentage: 0, isAlive: false, fungusId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusFighterMonsterDetail>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusFighterMonsterDetail): FungusFighterMonsterDetail {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float cur_hp_percentage */ 9:
                    message.curHpPercentage = reader.float();
                    break;
                case /* bool is_alive */ 10:
                    message.isAlive = reader.bool();
                    break;
                case /* uint32 fungus_id */ 13:
                    message.fungusId = reader.uint32();
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
    internalBinaryWrite(message: FungusFighterMonsterDetail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float cur_hp_percentage = 9; */
        if (message.curHpPercentage !== 0)
            writer.tag(9, WireType.Bit32).float(message.curHpPercentage);
        /* bool is_alive = 10; */
        if (message.isAlive !== false)
            writer.tag(10, WireType.Varint).bool(message.isAlive);
        /* uint32 fungus_id = 13; */
        if (message.fungusId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.fungusId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterMonsterDetail
 */
export const FungusFighterMonsterDetail = new FungusFighterMonsterDetail$Type();