// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ShowMessageNotify.proto" (syntax proto3)
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
import { MsgParam } from "./MsgParam";
import { SvrMsgId } from "./SvrMsgId";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 19;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ShowMessageNotify
 */
export interface ShowMessageNotify {
    /**
     * @generated from protobuf field: SvrMsgId msg_id = 9;
     */
    msgId: SvrMsgId;
    /**
     * @generated from protobuf field: repeated MsgParam params = 10;
     */
    params: MsgParam[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ShowMessageNotify$Type extends MessageType<ShowMessageNotify> {
    constructor() {
        super("ShowMessageNotify", [
            { no: 9, name: "msg_id", kind: "enum", T: () => ["SvrMsgId", SvrMsgId, "SVR_MSG_ID_"] },
            { no: 10, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MsgParam }
        ]);
    }
    create(value?: PartialMessage<ShowMessageNotify>): ShowMessageNotify {
        const message = { msgId: 0, params: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShowMessageNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShowMessageNotify): ShowMessageNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* SvrMsgId msg_id */ 9:
                    message.msgId = reader.int32();
                    break;
                case /* repeated MsgParam params */ 10:
                    message.params.push(MsgParam.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: ShowMessageNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* SvrMsgId msg_id = 9; */
        if (message.msgId !== 0)
            writer.tag(9, WireType.Varint).int32(message.msgId);
        /* repeated MsgParam params = 10; */
        for (let i = 0; i < message.params.length; i++)
            MsgParam.internalBinaryWrite(message.params[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowMessageNotify
 */
export const ShowMessageNotify = new ShowMessageNotify$Type();
