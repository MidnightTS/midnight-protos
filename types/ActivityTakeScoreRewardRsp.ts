// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ActivityTakeScoreRewardRsp.proto" (syntax proto3)
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
 *   CMD_ID = 8527;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ActivityTakeScoreRewardRsp
 */
export interface ActivityTakeScoreRewardRsp {
    /**
     * @generated from protobuf field: uint32 activity_id = 12;
     */
    activityId: number;
    /**
     * @generated from protobuf field: uint32 reward_config_id = 2;
     */
    rewardConfigId: number;
    /**
     * @generated from protobuf field: int32 retcode = 13;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityTakeScoreRewardRsp$Type extends MessageType<ActivityTakeScoreRewardRsp> {
    constructor() {
        super("ActivityTakeScoreRewardRsp", [
            { no: 12, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reward_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ActivityTakeScoreRewardRsp>): ActivityTakeScoreRewardRsp {
        const message = { activityId: 0, rewardConfigId: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityTakeScoreRewardRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityTakeScoreRewardRsp): ActivityTakeScoreRewardRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 activity_id */ 12:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 reward_config_id */ 2:
                    message.rewardConfigId = reader.uint32();
                    break;
                case /* int32 retcode */ 13:
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
    internalBinaryWrite(message: ActivityTakeScoreRewardRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 activity_id = 12; */
        if (message.activityId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.activityId);
        /* uint32 reward_config_id = 2; */
        if (message.rewardConfigId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.rewardConfigId);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityTakeScoreRewardRsp
 */
export const ActivityTakeScoreRewardRsp = new ActivityTakeScoreRewardRsp$Type();
