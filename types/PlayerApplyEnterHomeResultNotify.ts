// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerApplyEnterHomeResultNotify.proto" (syntax proto3)
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
 *   CMD_ID = 4793;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerApplyEnterHomeResultNotify
 */
export interface PlayerApplyEnterHomeResultNotify {
    /**
     * @generated from protobuf field: uint32 target_uid = 9;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: string target_nickname = 2;
     */
    targetNickname: string;
    /**
     * @generated from protobuf field: bool is_agreed = 13;
     */
    isAgreed: boolean;
    /**
     * @generated from protobuf field: PlayerApplyEnterHomeResultNotify.Reason reason = 5;
     */
    reason: PlayerApplyEnterHomeResultNotify_Reason;
}
/**
 * @generated from protobuf enum PlayerApplyEnterHomeResultNotify.Reason
 */
export enum PlayerApplyEnterHomeResultNotify_Reason {
    /**
     * @generated from protobuf enum value: REASON_PLAYER_JUDGE = 0;
     */
    PLAYER_JUDGE = 0,
    /**
     * @generated from protobuf enum value: REASON_PLAYER_ENTER_OPTION_REFUSE = 1;
     */
    PLAYER_ENTER_OPTION_REFUSE = 1,
    /**
     * @generated from protobuf enum value: REASON_PLAYER_ENTER_OPTION_DIRECT = 2;
     */
    PLAYER_ENTER_OPTION_DIRECT = 2,
    /**
     * @generated from protobuf enum value: REASON_SYSTEM_JUDGE = 3;
     */
    SYSTEM_JUDGE = 3,
    /**
     * @generated from protobuf enum value: REASON_HOST_IN_MATCH = 4;
     */
    HOST_IN_MATCH = 4,
    /**
     * @generated from protobuf enum value: REASON_PS_PLAYER_NOT_ACCEPT_OTHERS = 5;
     */
    PS_PLAYER_NOT_ACCEPT_OTHERS = 5,
    /**
     * @generated from protobuf enum value: REASON_OPEN_STATE_NOT_OPEN = 6;
     */
    OPEN_STATE_NOT_OPEN = 6,
    /**
     * @generated from protobuf enum value: REASON_HOST_IN_EDIT_MODE = 7;
     */
    HOST_IN_EDIT_MODE = 7,
    /**
     * @generated from protobuf enum value: REASON_PRIOR_CHECK = 8;
     */
    PRIOR_CHECK = 8
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeResultNotify$Type extends MessageType<PlayerApplyEnterHomeResultNotify> {
    constructor() {
        super("PlayerApplyEnterHomeResultNotify", [
            { no: 9, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "target_nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "reason", kind: "enum", T: () => ["PlayerApplyEnterHomeResultNotify.Reason", PlayerApplyEnterHomeResultNotify_Reason, "REASON_"] }
        ]);
    }
    create(value?: PartialMessage<PlayerApplyEnterHomeResultNotify>): PlayerApplyEnterHomeResultNotify {
        const message = { targetUid: 0, targetNickname: "", isAgreed: false, reason: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerApplyEnterHomeResultNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerApplyEnterHomeResultNotify): PlayerApplyEnterHomeResultNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 target_uid */ 9:
                    message.targetUid = reader.uint32();
                    break;
                case /* string target_nickname */ 2:
                    message.targetNickname = reader.string();
                    break;
                case /* bool is_agreed */ 13:
                    message.isAgreed = reader.bool();
                    break;
                case /* PlayerApplyEnterHomeResultNotify.Reason reason */ 5:
                    message.reason = reader.int32();
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
    internalBinaryWrite(message: PlayerApplyEnterHomeResultNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 target_uid = 9; */
        if (message.targetUid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.targetUid);
        /* string target_nickname = 2; */
        if (message.targetNickname !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.targetNickname);
        /* bool is_agreed = 13; */
        if (message.isAgreed !== false)
            writer.tag(13, WireType.Varint).bool(message.isAgreed);
        /* PlayerApplyEnterHomeResultNotify.Reason reason = 5; */
        if (message.reason !== 0)
            writer.tag(5, WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterHomeResultNotify
 */
export const PlayerApplyEnterHomeResultNotify = new PlayerApplyEnterHomeResultNotify$Type();
