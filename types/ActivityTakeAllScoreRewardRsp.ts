// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ActivityTakeAllScoreRewardRsp.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8043;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ActivityTakeAllScoreRewardRsp
 */
export interface ActivityTakeAllScoreRewardRsp {
    /**
     * @generated from protobuf field: repeated uint32 reward_config_list = 10;
     */
    rewardConfigList: number[];
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 activity_id = 3;
     */
    activityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityTakeAllScoreRewardRsp$Type extends MessageType<ActivityTakeAllScoreRewardRsp> {
    constructor() {
        super("ActivityTakeAllScoreRewardRsp", [
            { no: 10, name: "reward_config_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ActivityTakeAllScoreRewardRsp>): ActivityTakeAllScoreRewardRsp {
        const message = { rewardConfigList: [], retcode: 0, activityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityTakeAllScoreRewardRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityTakeAllScoreRewardRsp): ActivityTakeAllScoreRewardRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 reward_config_list */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardConfigList.push(reader.uint32());
                    else
                        message.rewardConfigList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 activity_id */ 3:
                    message.activityId = reader.uint32();
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
    internalBinaryWrite(message: ActivityTakeAllScoreRewardRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 reward_config_list = 10; */
        if (message.rewardConfigList.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardConfigList.length; i++)
                writer.uint32(message.rewardConfigList[i]);
            writer.join();
        }
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        /* uint32 activity_id = 3; */
        if (message.activityId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.activityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityTakeAllScoreRewardRsp
 */
export const ActivityTakeAllScoreRewardRsp = new ActivityTakeAllScoreRewardRsp$Type();