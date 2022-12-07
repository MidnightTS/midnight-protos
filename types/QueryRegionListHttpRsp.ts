// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "QueryRegionListHttpRsp.proto" (syntax proto3)
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
import { RegionSimpleInfo } from "./RegionSimpleInfo";
/**
 * @generated from protobuf message QueryRegionListHttpRsp
 */
export interface QueryRegionListHttpRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated RegionSimpleInfo region_list = 2;
     */
    regionList: RegionSimpleInfo[];
    /**
     * @generated from protobuf field: bytes client_secret_key = 5;
     */
    clientSecretKey: Uint8Array;
    /**
     * @generated from protobuf field: bytes client_custom_config_encrypted = 6;
     */
    clientCustomConfigEncrypted: Uint8Array;
    /**
     * @generated from protobuf field: bool enable_login_pc = 7;
     */
    enableLoginPc: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryRegionListHttpRsp$Type extends MessageType<QueryRegionListHttpRsp> {
    constructor() {
        super("QueryRegionListHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "region_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RegionSimpleInfo },
            { no: 5, name: "client_secret_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "client_custom_config_encrypted", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "enable_login_pc", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<QueryRegionListHttpRsp>): QueryRegionListHttpRsp {
        const message = { retcode: 0, regionList: [], clientSecretKey: new Uint8Array(0), clientCustomConfigEncrypted: new Uint8Array(0), enableLoginPc: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryRegionListHttpRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryRegionListHttpRsp): QueryRegionListHttpRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated RegionSimpleInfo region_list */ 2:
                    message.regionList.push(RegionSimpleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bytes client_secret_key */ 5:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* bytes client_custom_config_encrypted */ 6:
                    message.clientCustomConfigEncrypted = reader.bytes();
                    break;
                case /* bool enable_login_pc */ 7:
                    message.enableLoginPc = reader.bool();
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
    internalBinaryWrite(message: QueryRegionListHttpRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, WireType.Varint).int32(message.retcode);
        /* repeated RegionSimpleInfo region_list = 2; */
        for (let i = 0; i < message.regionList.length; i++)
            RegionSimpleInfo.internalBinaryWrite(message.regionList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bytes client_secret_key = 5; */
        if (message.clientSecretKey.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* bytes client_custom_config_encrypted = 6; */
        if (message.clientCustomConfigEncrypted.length)
            writer.tag(6, WireType.LengthDelimited).bytes(message.clientCustomConfigEncrypted);
        /* bool enable_login_pc = 7; */
        if (message.enableLoginPc !== false)
            writer.tag(7, WireType.Varint).bool(message.enableLoginPc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryRegionListHttpRsp
 */
export const QueryRegionListHttpRsp = new QueryRegionListHttpRsp$Type();
