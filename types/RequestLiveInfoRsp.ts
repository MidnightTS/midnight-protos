// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RequestLiveInfoRsp.proto" (syntax proto3)
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
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 894;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message RequestLiveInfoRsp
 */
export interface RequestLiveInfoRsp {
    /**
     * @generated from protobuf field: int32 retcode = 13;
     */
    retcode: number;
    /**
     * @generated from protobuf field: string Unk3300_BDOGCPKPLOK = 11 [json_name = "Unk3300BDOGCPKPLOK"];
     */
    unk3300BDOGCPKPLOK: string;
    /**
     * @generated from protobuf field: string Unk3300_DNGGIOIKLHC = 6 [json_name = "Unk3300DNGGIOIKLHC"];
     */
    unk3300DNGGIOIKLHC: string;
    /**
     * @generated from protobuf field: uint32 live_id = 10;
     */
    liveId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RequestLiveInfoRsp$Type extends MessageType<RequestLiveInfoRsp> {
    constructor() {
        super("RequestLiveInfoRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "Unk3300_BDOGCPKPLOK", kind: "scalar", jsonName: "Unk3300BDOGCPKPLOK", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Unk3300_DNGGIOIKLHC", kind: "scalar", jsonName: "Unk3300DNGGIOIKLHC", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "live_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RequestLiveInfoRsp>): RequestLiveInfoRsp {
        const message = { retcode: 0, unk3300BDOGCPKPLOK: "", unk3300DNGGIOIKLHC: "", liveId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RequestLiveInfoRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestLiveInfoRsp): RequestLiveInfoRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* string Unk3300_BDOGCPKPLOK = 11 [json_name = "Unk3300BDOGCPKPLOK"];*/ 11:
                    message.unk3300BDOGCPKPLOK = reader.string();
                    break;
                case /* string Unk3300_DNGGIOIKLHC = 6 [json_name = "Unk3300DNGGIOIKLHC"];*/ 6:
                    message.unk3300DNGGIOIKLHC = reader.string();
                    break;
                case /* uint32 live_id */ 10:
                    message.liveId = reader.uint32();
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
    internalBinaryWrite(message: RequestLiveInfoRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, WireType.Varint).int32(message.retcode);
        /* string Unk3300_BDOGCPKPLOK = 11 [json_name = "Unk3300BDOGCPKPLOK"]; */
        if (message.unk3300BDOGCPKPLOK !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.unk3300BDOGCPKPLOK);
        /* string Unk3300_DNGGIOIKLHC = 6 [json_name = "Unk3300DNGGIOIKLHC"]; */
        if (message.unk3300DNGGIOIKLHC !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.unk3300DNGGIOIKLHC);
        /* uint32 live_id = 10; */
        if (message.liveId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.liveId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RequestLiveInfoRsp
 */
export const RequestLiveInfoRsp = new RequestLiveInfoRsp$Type();
