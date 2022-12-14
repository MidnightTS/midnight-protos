// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AttackHitEffectResult.proto" (syntax proto3)
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
 * @generated from protobuf message AttackHitEffectResult
 */
export interface AttackHitEffectResult {
    /**
     * @generated from protobuf field: float air_strength = 13;
     */
    airStrength: number;
    /**
     * @generated from protobuf field: float hit_halt_time_scale = 10;
     */
    hitHaltTimeScale: number;
    /**
     * @generated from protobuf field: float hit_halt_time = 9;
     */
    hitHaltTime: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"];
     */
    unk3300LCKECJCKKJK: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"];
     */
    unk3300KLNGDAMMFIF: number;
    /**
     * @generated from protobuf field: float retreat_strength = 3;
     */
    retreatStrength: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AttackHitEffectResult$Type extends MessageType<AttackHitEffectResult> {
    constructor() {
        super("AttackHitEffectResult", [
            { no: 13, name: "air_strength", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "hit_halt_time_scale", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "hit_halt_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "Unk3300_LCKECJCKKJK", kind: "scalar", jsonName: "Unk3300LCKECJCKKJK", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_KLNGDAMMFIF", kind: "scalar", jsonName: "Unk3300KLNGDAMMFIF", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retreat_strength", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<AttackHitEffectResult>): AttackHitEffectResult {
        const message = { airStrength: 0, hitHaltTimeScale: 0, hitHaltTime: 0, unk3300LCKECJCKKJK: 0, unk3300KLNGDAMMFIF: 0, retreatStrength: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AttackHitEffectResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AttackHitEffectResult): AttackHitEffectResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float air_strength */ 13:
                    message.airStrength = reader.float();
                    break;
                case /* float hit_halt_time_scale */ 10:
                    message.hitHaltTimeScale = reader.float();
                    break;
                case /* float hit_halt_time */ 9:
                    message.hitHaltTime = reader.float();
                    break;
                case /* uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"];*/ 8:
                    message.unk3300LCKECJCKKJK = reader.uint32();
                    break;
                case /* uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"];*/ 1:
                    message.unk3300KLNGDAMMFIF = reader.uint32();
                    break;
                case /* float retreat_strength */ 3:
                    message.retreatStrength = reader.float();
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
    internalBinaryWrite(message: AttackHitEffectResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float air_strength = 13; */
        if (message.airStrength !== 0)
            writer.tag(13, WireType.Bit32).float(message.airStrength);
        /* float hit_halt_time_scale = 10; */
        if (message.hitHaltTimeScale !== 0)
            writer.tag(10, WireType.Bit32).float(message.hitHaltTimeScale);
        /* float hit_halt_time = 9; */
        if (message.hitHaltTime !== 0)
            writer.tag(9, WireType.Bit32).float(message.hitHaltTime);
        /* uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"]; */
        if (message.unk3300LCKECJCKKJK !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300LCKECJCKKJK);
        /* uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"]; */
        if (message.unk3300KLNGDAMMFIF !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300KLNGDAMMFIF);
        /* float retreat_strength = 3; */
        if (message.retreatStrength !== 0)
            writer.tag(3, WireType.Bit32).float(message.retreatStrength);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AttackHitEffectResult
 */
export const AttackHitEffectResult = new AttackHitEffectResult$Type();
