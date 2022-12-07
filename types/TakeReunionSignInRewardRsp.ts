// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "TakeReunionSignInRewardRsp.proto" (syntax proto3)
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
import { ReunionSignInInfo } from "./ReunionSignInInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5067;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TakeReunionSignInRewardRsp
 */
export interface TakeReunionSignInRewardRsp {
    /**
     * @generated from protobuf field: ReunionSignInInfo sign_in_info = 13;
     */
    signInInfo?: ReunionSignInInfo;
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionSignInRewardRsp$Type extends MessageType<TakeReunionSignInRewardRsp> {
    constructor() {
        super("TakeReunionSignInRewardRsp", [
            { no: 13, name: "sign_in_info", kind: "message", T: () => ReunionSignInInfo },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<TakeReunionSignInRewardRsp>): TakeReunionSignInRewardRsp {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TakeReunionSignInRewardRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TakeReunionSignInRewardRsp): TakeReunionSignInRewardRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ReunionSignInInfo sign_in_info */ 13:
                    message.signInInfo = ReunionSignInInfo.internalBinaryRead(reader, reader.uint32(), options, message.signInInfo);
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
    internalBinaryWrite(message: TakeReunionSignInRewardRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ReunionSignInInfo sign_in_info = 13; */
        if (message.signInInfo)
            ReunionSignInInfo.internalBinaryWrite(message.signInInfo, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message TakeReunionSignInRewardRsp
 */
export const TakeReunionSignInRewardRsp = new TakeReunionSignInRewardRsp$Type();
