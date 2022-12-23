// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AdjustTrackingInfo.proto" (syntax proto3)
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
 * @generated from protobuf message AdjustTrackingInfo
 */
export interface AdjustTrackingInfo {
    /**
     * @generated from protobuf field: string Unk3300_CHCOHLGBHLB = 2 [json_name = "Unk3300CHCOHLGBHLB"];
     */
    unk3300CHCOHLGBHLB: string;
    /**
     * @generated from protobuf field: string Unk3300_GAMLJPFKCGC = 9 [json_name = "Unk3300GAMLJPFKCGC"];
     */
    unk3300GAMLJPFKCGC: string;
    /**
     * @generated from protobuf field: string Unk3300_ONNMBNODPIA = 4 [json_name = "Unk3300ONNMBNODPIA"];
     */
    unk3300ONNMBNODPIA: string;
    /**
     * @generated from protobuf field: string Unk3300_MHDOPAMDMPL = 6 [json_name = "Unk3300MHDOPAMDMPL"];
     */
    unk3300MHDOPAMDMPL: string;
    /**
     * @generated from protobuf field: string Unk3300_INAIEOMCIEM = 7 [json_name = "Unk3300INAIEOMCIEM"];
     */
    unk3300INAIEOMCIEM: string;
    /**
     * @generated from protobuf field: string Unk3300_KLKFLIIOFKK = 3 [json_name = "Unk3300KLKFLIIOFKK"];
     */
    unk3300KLKFLIIOFKK: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class AdjustTrackingInfo$Type extends MessageType<AdjustTrackingInfo> {
    constructor() {
        super("AdjustTrackingInfo", [
            { no: 2, name: "Unk3300_CHCOHLGBHLB", kind: "scalar", jsonName: "Unk3300CHCOHLGBHLB", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "Unk3300_GAMLJPFKCGC", kind: "scalar", jsonName: "Unk3300GAMLJPFKCGC", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "Unk3300_ONNMBNODPIA", kind: "scalar", jsonName: "Unk3300ONNMBNODPIA", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Unk3300_MHDOPAMDMPL", kind: "scalar", jsonName: "Unk3300MHDOPAMDMPL", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Unk3300_INAIEOMCIEM", kind: "scalar", jsonName: "Unk3300INAIEOMCIEM", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "Unk3300_KLKFLIIOFKK", kind: "scalar", jsonName: "Unk3300KLKFLIIOFKK", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AdjustTrackingInfo>): AdjustTrackingInfo {
        const message = { unk3300CHCOHLGBHLB: "", unk3300GAMLJPFKCGC: "", unk3300ONNMBNODPIA: "", unk3300MHDOPAMDMPL: "", unk3300INAIEOMCIEM: "", unk3300KLKFLIIOFKK: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdjustTrackingInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdjustTrackingInfo): AdjustTrackingInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string Unk3300_CHCOHLGBHLB = 2 [json_name = "Unk3300CHCOHLGBHLB"];*/ 2:
                    message.unk3300CHCOHLGBHLB = reader.string();
                    break;
                case /* string Unk3300_GAMLJPFKCGC = 9 [json_name = "Unk3300GAMLJPFKCGC"];*/ 9:
                    message.unk3300GAMLJPFKCGC = reader.string();
                    break;
                case /* string Unk3300_ONNMBNODPIA = 4 [json_name = "Unk3300ONNMBNODPIA"];*/ 4:
                    message.unk3300ONNMBNODPIA = reader.string();
                    break;
                case /* string Unk3300_MHDOPAMDMPL = 6 [json_name = "Unk3300MHDOPAMDMPL"];*/ 6:
                    message.unk3300MHDOPAMDMPL = reader.string();
                    break;
                case /* string Unk3300_INAIEOMCIEM = 7 [json_name = "Unk3300INAIEOMCIEM"];*/ 7:
                    message.unk3300INAIEOMCIEM = reader.string();
                    break;
                case /* string Unk3300_KLKFLIIOFKK = 3 [json_name = "Unk3300KLKFLIIOFKK"];*/ 3:
                    message.unk3300KLKFLIIOFKK = reader.string();
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
    internalBinaryWrite(message: AdjustTrackingInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string Unk3300_CHCOHLGBHLB = 2 [json_name = "Unk3300CHCOHLGBHLB"]; */
        if (message.unk3300CHCOHLGBHLB !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.unk3300CHCOHLGBHLB);
        /* string Unk3300_GAMLJPFKCGC = 9 [json_name = "Unk3300GAMLJPFKCGC"]; */
        if (message.unk3300GAMLJPFKCGC !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.unk3300GAMLJPFKCGC);
        /* string Unk3300_ONNMBNODPIA = 4 [json_name = "Unk3300ONNMBNODPIA"]; */
        if (message.unk3300ONNMBNODPIA !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.unk3300ONNMBNODPIA);
        /* string Unk3300_MHDOPAMDMPL = 6 [json_name = "Unk3300MHDOPAMDMPL"]; */
        if (message.unk3300MHDOPAMDMPL !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.unk3300MHDOPAMDMPL);
        /* string Unk3300_INAIEOMCIEM = 7 [json_name = "Unk3300INAIEOMCIEM"]; */
        if (message.unk3300INAIEOMCIEM !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.unk3300INAIEOMCIEM);
        /* string Unk3300_KLKFLIIOFKK = 3 [json_name = "Unk3300KLKFLIIOFKK"]; */
        if (message.unk3300KLKFLIIOFKK !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.unk3300KLKFLIIOFKK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AdjustTrackingInfo
 */
export const AdjustTrackingInfo = new AdjustTrackingInfo$Type();
