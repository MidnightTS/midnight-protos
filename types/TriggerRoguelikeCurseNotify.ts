// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TriggerRoguelikeCurseNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8965;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TriggerRoguelikeCurseNotify
 */
export interface TriggerRoguelikeCurseNotify {
    /**
     * @generated from protobuf field: uint32 Unk3300_POLIENBCNLF = 7 [json_name = "Unk3300POLIENBCNLF"];
     */
    unk3300POLIENBCNLF: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LJHJIBDPBBC = 10 [json_name = "Unk3300LJHJIBDPBBC"];
     */
    unk3300LJHJIBDPBBC: number;
    /**
     * @generated from protobuf field: bool is_trigger_curse = 11;
     */
    isTriggerCurse: boolean;
    /**
     * @generated from protobuf field: repeated uint32 effect_param_list = 9;
     */
    effectParamList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class TriggerRoguelikeCurseNotify$Type extends MessageType<TriggerRoguelikeCurseNotify> {
    constructor() {
        super("TriggerRoguelikeCurseNotify", [
            { no: 7, name: "Unk3300_POLIENBCNLF", kind: "scalar", jsonName: "Unk3300POLIENBCNLF", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_LJHJIBDPBBC", kind: "scalar", jsonName: "Unk3300LJHJIBDPBBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_trigger_curse", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "effect_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TriggerRoguelikeCurseNotify>): TriggerRoguelikeCurseNotify {
        const message = { unk3300POLIENBCNLF: 0, unk3300LJHJIBDPBBC: 0, isTriggerCurse: false, effectParamList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TriggerRoguelikeCurseNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TriggerRoguelikeCurseNotify): TriggerRoguelikeCurseNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_POLIENBCNLF = 7 [json_name = "Unk3300POLIENBCNLF"];*/ 7:
                    message.unk3300POLIENBCNLF = reader.uint32();
                    break;
                case /* uint32 Unk3300_LJHJIBDPBBC = 10 [json_name = "Unk3300LJHJIBDPBBC"];*/ 10:
                    message.unk3300LJHJIBDPBBC = reader.uint32();
                    break;
                case /* bool is_trigger_curse */ 11:
                    message.isTriggerCurse = reader.bool();
                    break;
                case /* repeated uint32 effect_param_list */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.effectParamList.push(reader.uint32());
                    else
                        message.effectParamList.push(reader.uint32());
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
    internalBinaryWrite(message: TriggerRoguelikeCurseNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_POLIENBCNLF = 7 [json_name = "Unk3300POLIENBCNLF"]; */
        if (message.unk3300POLIENBCNLF !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300POLIENBCNLF);
        /* uint32 Unk3300_LJHJIBDPBBC = 10 [json_name = "Unk3300LJHJIBDPBBC"]; */
        if (message.unk3300LJHJIBDPBBC !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300LJHJIBDPBBC);
        /* bool is_trigger_curse = 11; */
        if (message.isTriggerCurse !== false)
            writer.tag(11, WireType.Varint).bool(message.isTriggerCurse);
        /* repeated uint32 effect_param_list = 9; */
        if (message.effectParamList.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.effectParamList.length; i++)
                writer.uint32(message.effectParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TriggerRoguelikeCurseNotify
 */
export const TriggerRoguelikeCurseNotify = new TriggerRoguelikeCurseNotify$Type();
