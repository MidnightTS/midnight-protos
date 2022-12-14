// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EnterTrialAvatarActivityDungeonReq.proto" (syntax proto3)
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
 *   CMD_ID = 2142;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EnterTrialAvatarActivityDungeonReq
 */
export interface EnterTrialAvatarActivityDungeonReq {
    /**
     * @generated from protobuf field: uint32 enter_point_id = 7;
     */
    enterPointId: number;
    /**
     * @generated from protobuf field: uint32 activity_id = 1;
     */
    activityId: number;
    /**
     * @generated from protobuf field: uint32 trial_avatar_index_id = 5;
     */
    trialAvatarIndexId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EnterTrialAvatarActivityDungeonReq$Type extends MessageType<EnterTrialAvatarActivityDungeonReq> {
    constructor() {
        super("EnterTrialAvatarActivityDungeonReq", [
            { no: 7, name: "enter_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "trial_avatar_index_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EnterTrialAvatarActivityDungeonReq>): EnterTrialAvatarActivityDungeonReq {
        const message = { enterPointId: 0, activityId: 0, trialAvatarIndexId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterTrialAvatarActivityDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterTrialAvatarActivityDungeonReq): EnterTrialAvatarActivityDungeonReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 enter_point_id */ 7:
                    message.enterPointId = reader.uint32();
                    break;
                case /* uint32 activity_id */ 1:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 trial_avatar_index_id */ 5:
                    message.trialAvatarIndexId = reader.uint32();
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
    internalBinaryWrite(message: EnterTrialAvatarActivityDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 enter_point_id = 7; */
        if (message.enterPointId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.enterPointId);
        /* uint32 activity_id = 1; */
        if (message.activityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.activityId);
        /* uint32 trial_avatar_index_id = 5; */
        if (message.trialAvatarIndexId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.trialAvatarIndexId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterTrialAvatarActivityDungeonReq
 */
export const EnterTrialAvatarActivityDungeonReq = new EnterTrialAvatarActivityDungeonReq$Type();
