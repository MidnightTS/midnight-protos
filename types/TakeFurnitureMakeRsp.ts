// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "TakeFurnitureMakeRsp.proto" (syntax proto3)
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
import { FurnitureMakeSlot } from "./FurnitureMakeSlot";
import { ItemParam } from "./ItemParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4803;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TakeFurnitureMakeRsp
 */
export interface TakeFurnitureMakeRsp {
    /**
     * @generated from protobuf field: int32 retcode = 15;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated ItemParam Unk3300_JDHFPCBOGFH = 5 [json_name = "Unk3300JDHFPCBOGFH"];
     */
    unk3300JDHFPCBOGFH: ItemParam[];
    /**
     * @generated from protobuf field: FurnitureMakeSlot furniture_make_slot = 14;
     */
    furnitureMakeSlot?: FurnitureMakeSlot;
    /**
     * @generated from protobuf field: repeated ItemParam Unk3300_EOLDJAMHDHM = 10 [json_name = "Unk3300EOLDJAMHDHM"];
     */
    unk3300EOLDJAMHDHM: ItemParam[];
    /**
     * @generated from protobuf field: uint32 make_id = 3;
     */
    makeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TakeFurnitureMakeRsp$Type extends MessageType<TakeFurnitureMakeRsp> {
    constructor() {
        super("TakeFurnitureMakeRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "Unk3300_JDHFPCBOGFH", kind: "message", jsonName: "Unk3300JDHFPCBOGFH", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 14, name: "furniture_make_slot", kind: "message", T: () => FurnitureMakeSlot },
            { no: 10, name: "Unk3300_EOLDJAMHDHM", kind: "message", jsonName: "Unk3300EOLDJAMHDHM", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 3, name: "make_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TakeFurnitureMakeRsp>): TakeFurnitureMakeRsp {
        const message = { retcode: 0, unk3300JDHFPCBOGFH: [], unk3300EOLDJAMHDHM: [], makeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TakeFurnitureMakeRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TakeFurnitureMakeRsp): TakeFurnitureMakeRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ItemParam Unk3300_JDHFPCBOGFH = 5 [json_name = "Unk3300JDHFPCBOGFH"];*/ 5:
                    message.unk3300JDHFPCBOGFH.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* FurnitureMakeSlot furniture_make_slot */ 14:
                    message.furnitureMakeSlot = FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
                    break;
                case /* repeated ItemParam Unk3300_EOLDJAMHDHM = 10 [json_name = "Unk3300EOLDJAMHDHM"];*/ 10:
                    message.unk3300EOLDJAMHDHM.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 make_id */ 3:
                    message.makeId = reader.uint32();
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
    internalBinaryWrite(message: TakeFurnitureMakeRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, WireType.Varint).int32(message.retcode);
        /* repeated ItemParam Unk3300_JDHFPCBOGFH = 5 [json_name = "Unk3300JDHFPCBOGFH"]; */
        for (let i = 0; i < message.unk3300JDHFPCBOGFH.length; i++)
            ItemParam.internalBinaryWrite(message.unk3300JDHFPCBOGFH[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* FurnitureMakeSlot furniture_make_slot = 14; */
        if (message.furnitureMakeSlot)
            FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam Unk3300_EOLDJAMHDHM = 10 [json_name = "Unk3300EOLDJAMHDHM"]; */
        for (let i = 0; i < message.unk3300EOLDJAMHDHM.length; i++)
            ItemParam.internalBinaryWrite(message.unk3300EOLDJAMHDHM[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* uint32 make_id = 3; */
        if (message.makeId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeFurnitureMakeRsp
 */
export const TakeFurnitureMakeRsp = new TakeFurnitureMakeRsp$Type();