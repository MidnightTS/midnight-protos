// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "QueryCurrRegionHttpRsp.proto" (syntax proto3)
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
import { StopServerInfo } from "./StopServerInfo";
import { ForceUpdateInfo } from "./ForceUpdateInfo";
import { RegionInfo } from "./RegionInfo";
/**
 * @generated from protobuf message QueryCurrRegionHttpRsp
 */
export interface QueryCurrRegionHttpRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: string msg = 2;
     */
    msg: string;
    /**
     * @generated from protobuf field: RegionInfo region_info = 3;
     */
    regionInfo?: RegionInfo;
    /**
     * @generated from protobuf field: bytes client_secret_key = 11;
     */
    clientSecretKey: Uint8Array;
    /**
     * @generated from protobuf field: bytes region_custom_config_encrypted = 12;
     */
    regionCustomConfigEncrypted: Uint8Array;
    /**
     * @generated from protobuf field: bytes client_region_custom_config_encrypted = 13;
     */
    clientRegionCustomConfigEncrypted: Uint8Array;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "forceUpdate";
        /**
         * @generated from protobuf field: ForceUpdateInfo force_update = 4;
         */
        forceUpdate: ForceUpdateInfo;
    } | {
        oneofKind: "stopServer";
        /**
         * @generated from protobuf field: StopServerInfo stop_server = 5;
         */
        stopServer: StopServerInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryCurrRegionHttpRsp$Type extends MessageType<QueryCurrRegionHttpRsp> {
    constructor() {
        super("QueryCurrRegionHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "region_info", kind: "message", T: () => RegionInfo },
            { no: 11, name: "client_secret_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "region_custom_config_encrypted", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "client_region_custom_config_encrypted", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "force_update", kind: "message", oneof: "detail", T: () => ForceUpdateInfo },
            { no: 5, name: "stop_server", kind: "message", oneof: "detail", T: () => StopServerInfo }
        ]);
    }
    create(value?: PartialMessage<QueryCurrRegionHttpRsp>): QueryCurrRegionHttpRsp {
        const message = { retcode: 0, msg: "", clientSecretKey: new Uint8Array(0), regionCustomConfigEncrypted: new Uint8Array(0), clientRegionCustomConfigEncrypted: new Uint8Array(0), detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryCurrRegionHttpRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryCurrRegionHttpRsp): QueryCurrRegionHttpRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* string msg */ 2:
                    message.msg = reader.string();
                    break;
                case /* RegionInfo region_info */ 3:
                    message.regionInfo = RegionInfo.internalBinaryRead(reader, reader.uint32(), options, message.regionInfo);
                    break;
                case /* bytes client_secret_key */ 11:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* bytes region_custom_config_encrypted */ 12:
                    message.regionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* bytes client_region_custom_config_encrypted */ 13:
                    message.clientRegionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* ForceUpdateInfo force_update */ 4:
                    message.detail = {
                        oneofKind: "forceUpdate",
                        forceUpdate: ForceUpdateInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).forceUpdate)
                    };
                    break;
                case /* StopServerInfo stop_server */ 5:
                    message.detail = {
                        oneofKind: "stopServer",
                        stopServer: StopServerInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).stopServer)
                    };
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
    internalBinaryWrite(message: QueryCurrRegionHttpRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, WireType.Varint).int32(message.retcode);
        /* string msg = 2; */
        if (message.msg !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msg);
        /* RegionInfo region_info = 3; */
        if (message.regionInfo)
            RegionInfo.internalBinaryWrite(message.regionInfo, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bytes client_secret_key = 11; */
        if (message.clientSecretKey.length)
            writer.tag(11, WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* bytes region_custom_config_encrypted = 12; */
        if (message.regionCustomConfigEncrypted.length)
            writer.tag(12, WireType.LengthDelimited).bytes(message.regionCustomConfigEncrypted);
        /* bytes client_region_custom_config_encrypted = 13; */
        if (message.clientRegionCustomConfigEncrypted.length)
            writer.tag(13, WireType.LengthDelimited).bytes(message.clientRegionCustomConfigEncrypted);
        /* ForceUpdateInfo force_update = 4; */
        if (message.detail.oneofKind === "forceUpdate")
            ForceUpdateInfo.internalBinaryWrite(message.detail.forceUpdate, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* StopServerInfo stop_server = 5; */
        if (message.detail.oneofKind === "stopServer")
            StopServerInfo.internalBinaryWrite(message.detail.stopServer, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryCurrRegionHttpRsp
 */
export const QueryCurrRegionHttpRsp = new QueryCurrRegionHttpRsp$Type();
