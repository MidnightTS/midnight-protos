// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WinterCampAcceptItemResultInfo.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
/**
 * @generated from protobuf message WinterCampAcceptItemResultInfo
 */
export interface WinterCampAcceptItemResultInfo {
    /**
     * @generated from protobuf field: repeated ItemParam Unk3300_ILELLFNPDFJ = 15 [json_name = "Unk3300ILELLFNPDFJ"];
     */
    unk3300ILELLFNPDFJ: ItemParam[];
    /**
     * @generated from protobuf field: repeated ItemParam Unk3300_JHKOMCFHAOG = 13 [json_name = "Unk3300JHKOMCFHAOG"];
     */
    unk3300JHKOMCFHAOG: ItemParam[];
    /**
     * @generated from protobuf field: uint32 uid = 9;
     */
    uid: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampAcceptItemResultInfo$Type extends MessageType<WinterCampAcceptItemResultInfo> {
    constructor() {
        super("WinterCampAcceptItemResultInfo", [
            { no: 15, name: "Unk3300_ILELLFNPDFJ", kind: "message", jsonName: "Unk3300ILELLFNPDFJ", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 13, name: "Unk3300_JHKOMCFHAOG", kind: "message", jsonName: "Unk3300JHKOMCFHAOG", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WinterCampAcceptItemResultInfo>): WinterCampAcceptItemResultInfo {
        const message = { unk3300ILELLFNPDFJ: [], unk3300JHKOMCFHAOG: [], uid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WinterCampAcceptItemResultInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WinterCampAcceptItemResultInfo): WinterCampAcceptItemResultInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ItemParam Unk3300_ILELLFNPDFJ = 15 [json_name = "Unk3300ILELLFNPDFJ"];*/ 15:
                    message.unk3300ILELLFNPDFJ.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam Unk3300_JHKOMCFHAOG = 13 [json_name = "Unk3300JHKOMCFHAOG"];*/ 13:
                    message.unk3300JHKOMCFHAOG.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
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
    internalBinaryWrite(message: WinterCampAcceptItemResultInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ItemParam Unk3300_ILELLFNPDFJ = 15 [json_name = "Unk3300ILELLFNPDFJ"]; */
        for (let i = 0; i < message.unk3300ILELLFNPDFJ.length; i++)
            ItemParam.internalBinaryWrite(message.unk3300ILELLFNPDFJ[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam Unk3300_JHKOMCFHAOG = 13 [json_name = "Unk3300JHKOMCFHAOG"]; */
        for (let i = 0; i < message.unk3300JHKOMCFHAOG.length; i++)
            ItemParam.internalBinaryWrite(message.unk3300JHKOMCFHAOG[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampAcceptItemResultInfo
 */
export const WinterCampAcceptItemResultInfo = new WinterCampAcceptItemResultInfo$Type();
