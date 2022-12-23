// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RechargeRsp.proto" (syntax proto3)
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
 *   CMD_ID = 4141;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message RechargeRsp
 */
export interface RechargeRsp {
    /**
     * @generated from protobuf field: string product_id = 10;
     */
    productId: string;
    /**
     * @generated from protobuf field: bool is_show_minors_hint = 1;
     */
    isShowMinorsHint: boolean;
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RechargeRsp$Type extends MessageType<RechargeRsp> {
    constructor() {
        super("RechargeRsp", [
            { no: 10, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "is_show_minors_hint", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<RechargeRsp>): RechargeRsp {
        const message = { productId: "", isShowMinorsHint: false, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RechargeRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RechargeRsp): RechargeRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string product_id */ 10:
                    message.productId = reader.string();
                    break;
                case /* bool is_show_minors_hint */ 1:
                    message.isShowMinorsHint = reader.bool();
                    break;
                case /* int32 retcode */ 9:
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
    internalBinaryWrite(message: RechargeRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string product_id = 10; */
        if (message.productId !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.productId);
        /* bool is_show_minors_hint = 1; */
        if (message.isShowMinorsHint !== false)
            writer.tag(1, WireType.Varint).bool(message.isShowMinorsHint);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RechargeRsp
 */
export const RechargeRsp = new RechargeRsp$Type();
