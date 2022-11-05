// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "AvatarFetterInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
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
import { FetterData } from "./FetterData";
/**
 * @generated from protobuf message com.midnights.game.AvatarFetterInfo
 */
export interface AvatarFetterInfo {
    /**
     * @generated from protobuf field: optional uint32 exp_number = 1;
     */
    expNumber?: number;
    /**
     * @generated from protobuf field: optional uint32 exp_level = 2;
     */
    expLevel?: number;
    /**
     * @generated from protobuf field: repeated uint32 open_id_list = 3;
     */
    openIdList: number[];
    /**
     * @generated from protobuf field: repeated uint32 finish_id_list = 4;
     */
    finishIdList: number[];
    /**
     * @generated from protobuf field: repeated uint32 rewarded_fetter_level_list = 5;
     */
    rewardedFetterLevelList: number[];
    /**
     * @generated from protobuf field: repeated com.midnights.game.FetterData fetter_list = 6;
     */
    fetterList: FetterData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterInfo$Type extends MessageType<AvatarFetterInfo> {
    constructor() {
        super("com.midnights.game.AvatarFetterInfo", [
            { no: 1, name: "exp_number", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exp_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "open_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "finish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "rewarded_fetter_level_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "fetter_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FetterData }
        ]);
    }
    create(value?: PartialMessage<AvatarFetterInfo>): AvatarFetterInfo {
        const message = { openIdList: [], finishIdList: [], rewardedFetterLevelList: [], fetterList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarFetterInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarFetterInfo): AvatarFetterInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 exp_number */ 1:
                    message.expNumber = reader.uint32();
                    break;
                case /* optional uint32 exp_level */ 2:
                    message.expLevel = reader.uint32();
                    break;
                case /* repeated uint32 open_id_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openIdList.push(reader.uint32());
                    else
                        message.openIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 finish_id_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishIdList.push(reader.uint32());
                    else
                        message.finishIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 rewarded_fetter_level_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardedFetterLevelList.push(reader.uint32());
                    else
                        message.rewardedFetterLevelList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.FetterData fetter_list */ 6:
                    message.fetterList.push(FetterData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: AvatarFetterInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 exp_number = 1; */
        if (message.expNumber !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.expNumber);
        /* optional uint32 exp_level = 2; */
        if (message.expLevel !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.expLevel);
        /* repeated uint32 open_id_list = 3; */
        if (message.openIdList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.openIdList.length; i++)
                writer.uint32(message.openIdList[i]);
            writer.join();
        }
        /* repeated uint32 finish_id_list = 4; */
        if (message.finishIdList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishIdList.length; i++)
                writer.uint32(message.finishIdList[i]);
            writer.join();
        }
        /* repeated uint32 rewarded_fetter_level_list = 5; */
        if (message.rewardedFetterLevelList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardedFetterLevelList.length; i++)
                writer.uint32(message.rewardedFetterLevelList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.FetterData fetter_list = 6; */
        for (let i = 0; i < message.fetterList.length; i++)
            FetterData.internalBinaryWrite(message.fetterList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFetterInfo
 */
export const AvatarFetterInfo = new AvatarFetterInfo$Type();