// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SceneAvatarStaminaStepRsp.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 227;
 *   ENET_CHANNEL_ID = 1;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SceneAvatarStaminaStepRsp
 */
export interface SceneAvatarStaminaStepRsp {
    /**
     * @generated from protobuf field: Vector rot = 1;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: bool use_client_rot = 9;
     */
    useClientRot: boolean;
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarStaminaStepRsp$Type extends MessageType<SceneAvatarStaminaStepRsp> {
    constructor() {
        super("SceneAvatarStaminaStepRsp", [
            { no: 1, name: "rot", kind: "message", T: () => Vector },
            { no: 9, name: "use_client_rot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneAvatarStaminaStepRsp>): SceneAvatarStaminaStepRsp {
        const message = { useClientRot: false, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneAvatarStaminaStepRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneAvatarStaminaStepRsp): SceneAvatarStaminaStepRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector rot */ 1:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* bool use_client_rot */ 9:
                    message.useClientRot = reader.bool();
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
    internalBinaryWrite(message: SceneAvatarStaminaStepRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector rot = 1; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool use_client_rot = 9; */
        if (message.useClientRot !== false)
            writer.tag(9, WireType.Varint).bool(message.useClientRot);
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
 * @generated MessageType for protobuf message SceneAvatarStaminaStepRsp
 */
export const SceneAvatarStaminaStepRsp = new SceneAvatarStaminaStepRsp$Type();
