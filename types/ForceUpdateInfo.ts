// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "ForceUpdateInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
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
 * @generated from protobuf message com.midnights.game.ForceUpdateInfo
 */
export interface ForceUpdateInfo {
    /**
     * @generated from protobuf field: optional string force_update_url = 1;
     */
    forceUpdateUrl?: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ForceUpdateInfo$Type extends MessageType<ForceUpdateInfo> {
    constructor() {
        super("com.midnights.game.ForceUpdateInfo", [
            { no: 1, name: "force_update_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ForceUpdateInfo>): ForceUpdateInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ForceUpdateInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ForceUpdateInfo): ForceUpdateInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string force_update_url */ 1:
                    message.forceUpdateUrl = reader.string();
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
    internalBinaryWrite(message: ForceUpdateInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string force_update_url = 1; */
        if (message.forceUpdateUrl !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.forceUpdateUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForceUpdateInfo
 */
export const ForceUpdateInfo = new ForceUpdateInfo$Type();
