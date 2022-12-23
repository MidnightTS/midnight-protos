// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RoguelikeEffectViewReq.proto" (syntax proto3)
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
 *   CMD_ID = 8605;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message RoguelikeEffectViewReq
 */
export interface RoguelikeEffectViewReq {
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_FKGJGIJHKJI = 10 [json_name = "Unk3300FKGJGIJHKJI"];
     */
    unk3300FKGJGIJHKJI: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_LMIIAEPBKNB = 15 [json_name = "Unk3300LMIIAEPBKNB"];
     */
    unk3300LMIIAEPBKNB: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeEffectViewReq$Type extends MessageType<RoguelikeEffectViewReq> {
    constructor() {
        super("RoguelikeEffectViewReq", [
            { no: 10, name: "Unk3300_FKGJGIJHKJI", kind: "scalar", jsonName: "Unk3300FKGJGIJHKJI", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_LMIIAEPBKNB", kind: "scalar", jsonName: "Unk3300LMIIAEPBKNB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RoguelikeEffectViewReq>): RoguelikeEffectViewReq {
        const message = { unk3300FKGJGIJHKJI: [], unk3300LMIIAEPBKNB: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoguelikeEffectViewReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoguelikeEffectViewReq): RoguelikeEffectViewReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 Unk3300_FKGJGIJHKJI = 10 [json_name = "Unk3300FKGJGIJHKJI"];*/ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300FKGJGIJHKJI.push(reader.uint32());
                    else
                        message.unk3300FKGJGIJHKJI.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_LMIIAEPBKNB = 15 [json_name = "Unk3300LMIIAEPBKNB"];*/ 15:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300LMIIAEPBKNB.push(reader.uint32());
                    else
                        message.unk3300LMIIAEPBKNB.push(reader.uint32());
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
    internalBinaryWrite(message: RoguelikeEffectViewReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 Unk3300_FKGJGIJHKJI = 10 [json_name = "Unk3300FKGJGIJHKJI"]; */
        if (message.unk3300FKGJGIJHKJI.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300FKGJGIJHKJI.length; i++)
                writer.uint32(message.unk3300FKGJGIJHKJI[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_LMIIAEPBKNB = 15 [json_name = "Unk3300LMIIAEPBKNB"]; */
        if (message.unk3300LMIIAEPBKNB.length) {
            writer.tag(15, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300LMIIAEPBKNB.length; i++)
                writer.uint32(message.unk3300LMIIAEPBKNB[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeEffectViewReq
 */
export const RoguelikeEffectViewReq = new RoguelikeEffectViewReq$Type();
