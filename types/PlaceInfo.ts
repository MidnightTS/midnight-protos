// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "PlaceInfo.proto" (package "com.midnights.game", syntax proto3)
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
import { Vector } from "./Vector";
/**
 * @generated from protobuf message com.midnights.game.PlaceInfo
 */
export interface PlaceInfo {
    /**
     * @generated from protobuf field: optional com.midnights.game.Vector pos = 1;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: optional com.midnights.game.Vector rot = 2;
     */
    rot?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlaceInfo$Type extends MessageType<PlaceInfo> {
    constructor() {
        super("com.midnights.game.PlaceInfo", [
            { no: 1, name: "pos", kind: "message", T: () => Vector },
            { no: 2, name: "rot", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<PlaceInfo>): PlaceInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlaceInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlaceInfo): PlaceInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
    internalBinaryWrite(message: PlaceInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlaceInfo
 */
export const PlaceInfo = new PlaceInfo$Type();