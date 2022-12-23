// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CheckUgcUpdateRsp.proto" (syntax proto3)
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
import { UgcType } from "./UgcType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6318;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CheckUgcUpdateRsp
 */
export interface CheckUgcUpdateRsp {
    /**
     * @generated from protobuf field: UgcType ugc_type = 6;
     */
    ugcType: UgcType;
    /**
     * @generated from protobuf field: repeated uint64 update_ugc_guid_list = 3;
     */
    updateUgcGuidList: bigint[];
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CheckUgcUpdateRsp$Type extends MessageType<CheckUgcUpdateRsp> {
    constructor() {
        super("CheckUgcUpdateRsp", [
            { no: 6, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType, "UGC_TYPE_"] },
            { no: 3, name: "update_ugc_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CheckUgcUpdateRsp>): CheckUgcUpdateRsp {
        const message = { ugcType: 0, updateUgcGuidList: [], retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckUgcUpdateRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckUgcUpdateRsp): CheckUgcUpdateRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* UgcType ugc_type */ 6:
                    message.ugcType = reader.int32();
                    break;
                case /* repeated uint64 update_ugc_guid_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.updateUgcGuidList.push(reader.uint64().toBigInt());
                    else
                        message.updateUgcGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
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
    internalBinaryWrite(message: CheckUgcUpdateRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* UgcType ugc_type = 6; */
        if (message.ugcType !== 0)
            writer.tag(6, WireType.Varint).int32(message.ugcType);
        /* repeated uint64 update_ugc_guid_list = 3; */
        if (message.updateUgcGuidList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.updateUgcGuidList.length; i++)
                writer.uint64(message.updateUgcGuidList[i]);
            writer.join();
        }
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CheckUgcUpdateRsp
 */
export const CheckUgcUpdateRsp = new CheckUgcUpdateRsp$Type();
