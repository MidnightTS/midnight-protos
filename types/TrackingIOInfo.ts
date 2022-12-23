// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TrackingIOInfo.proto" (syntax proto3)
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
 * @generated from protobuf message TrackingIOInfo
 */
export interface TrackingIOInfo {
    /**
     * @generated from protobuf field: string client_tz = 10;
     */
    clientTz: string;
    /**
     * @generated from protobuf field: string Unk3300_PIBFPDAMJLE = 12 [json_name = "Unk3300PIBFPDAMJLE"];
     */
    unk3300PIBFPDAMJLE: string;
    /**
     * @generated from protobuf field: string Unk3300_NMDNLHLAKAM = 7 [json_name = "Unk3300NMDNLHLAKAM"];
     */
    unk3300NMDNLHLAKAM: string;
    /**
     * @generated from protobuf field: string rydevicetype = 5;
     */
    rydevicetype: string;
    /**
     * @generated from protobuf field: string Unk3300_CNPIGDOEJPB = 2 [json_name = "Unk3300CNPIGDOEJPB"];
     */
    unk3300CNPIGDOEJPB: string;
    /**
     * @generated from protobuf field: string Unk3300_CCOGBICMHKG = 9 [json_name = "Unk3300CCOGBICMHKG"];
     */
    unk3300CCOGBICMHKG: string;
    /**
     * @generated from protobuf field: string Unk3300_DJHKHEFPCDK = 1 [json_name = "Unk3300DJHKHEFPCDK"];
     */
    unk3300DJHKHEFPCDK: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class TrackingIOInfo$Type extends MessageType<TrackingIOInfo> {
    constructor() {
        super("TrackingIOInfo", [
            { no: 10, name: "client_tz", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "Unk3300_PIBFPDAMJLE", kind: "scalar", jsonName: "Unk3300PIBFPDAMJLE", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Unk3300_NMDNLHLAKAM", kind: "scalar", jsonName: "Unk3300NMDNLHLAKAM", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "rydevicetype", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "Unk3300_CNPIGDOEJPB", kind: "scalar", jsonName: "Unk3300CNPIGDOEJPB", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "Unk3300_CCOGBICMHKG", kind: "scalar", jsonName: "Unk3300CCOGBICMHKG", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "Unk3300_DJHKHEFPCDK", kind: "scalar", jsonName: "Unk3300DJHKHEFPCDK", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TrackingIOInfo>): TrackingIOInfo {
        const message = { clientTz: "", unk3300PIBFPDAMJLE: "", unk3300NMDNLHLAKAM: "", rydevicetype: "", unk3300CNPIGDOEJPB: "", unk3300CCOGBICMHKG: "", unk3300DJHKHEFPCDK: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TrackingIOInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TrackingIOInfo): TrackingIOInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_tz */ 10:
                    message.clientTz = reader.string();
                    break;
                case /* string Unk3300_PIBFPDAMJLE = 12 [json_name = "Unk3300PIBFPDAMJLE"];*/ 12:
                    message.unk3300PIBFPDAMJLE = reader.string();
                    break;
                case /* string Unk3300_NMDNLHLAKAM = 7 [json_name = "Unk3300NMDNLHLAKAM"];*/ 7:
                    message.unk3300NMDNLHLAKAM = reader.string();
                    break;
                case /* string rydevicetype */ 5:
                    message.rydevicetype = reader.string();
                    break;
                case /* string Unk3300_CNPIGDOEJPB = 2 [json_name = "Unk3300CNPIGDOEJPB"];*/ 2:
                    message.unk3300CNPIGDOEJPB = reader.string();
                    break;
                case /* string Unk3300_CCOGBICMHKG = 9 [json_name = "Unk3300CCOGBICMHKG"];*/ 9:
                    message.unk3300CCOGBICMHKG = reader.string();
                    break;
                case /* string Unk3300_DJHKHEFPCDK = 1 [json_name = "Unk3300DJHKHEFPCDK"];*/ 1:
                    message.unk3300DJHKHEFPCDK = reader.string();
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
    internalBinaryWrite(message: TrackingIOInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string client_tz = 10; */
        if (message.clientTz !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.clientTz);
        /* string Unk3300_PIBFPDAMJLE = 12 [json_name = "Unk3300PIBFPDAMJLE"]; */
        if (message.unk3300PIBFPDAMJLE !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.unk3300PIBFPDAMJLE);
        /* string Unk3300_NMDNLHLAKAM = 7 [json_name = "Unk3300NMDNLHLAKAM"]; */
        if (message.unk3300NMDNLHLAKAM !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.unk3300NMDNLHLAKAM);
        /* string rydevicetype = 5; */
        if (message.rydevicetype !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.rydevicetype);
        /* string Unk3300_CNPIGDOEJPB = 2 [json_name = "Unk3300CNPIGDOEJPB"]; */
        if (message.unk3300CNPIGDOEJPB !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.unk3300CNPIGDOEJPB);
        /* string Unk3300_CCOGBICMHKG = 9 [json_name = "Unk3300CCOGBICMHKG"]; */
        if (message.unk3300CCOGBICMHKG !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.unk3300CCOGBICMHKG);
        /* string Unk3300_DJHKHEFPCDK = 1 [json_name = "Unk3300DJHKHEFPCDK"]; */
        if (message.unk3300DJHKHEFPCDK !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.unk3300DJHKHEFPCDK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TrackingIOInfo
 */
export const TrackingIOInfo = new TrackingIOInfo$Type();
