"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryRegionListHttpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RegionSimpleInfo_1 = require("./RegionSimpleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QueryRegionListHttpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryRegionListHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "region_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RegionSimpleInfo_1.RegionSimpleInfo },
            { no: 5, name: "client_secret_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "client_custom_config_encrypted", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "enable_login_pc", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { regionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.RegionSimpleInfo region_list */ 2:
                    message.regionList.push(RegionSimpleInfo_1.RegionSimpleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bytes client_secret_key */ 5:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* optional bytes client_custom_config_encrypted */ 6:
                    message.clientCustomConfigEncrypted = reader.bytes();
                    break;
                case /* optional bool enable_login_pc */ 7:
                    message.enableLoginPc = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.RegionSimpleInfo region_list = 2; */
        for (let i = 0; i < message.regionList.length; i++)
            RegionSimpleInfo_1.RegionSimpleInfo.internalBinaryWrite(message.regionList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bytes client_secret_key = 5; */
        if (message.clientSecretKey !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* optional bytes client_custom_config_encrypted = 6; */
        if (message.clientCustomConfigEncrypted !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).bytes(message.clientCustomConfigEncrypted);
        /* optional bool enable_login_pc = 7; */
        if (message.enableLoginPc !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.enableLoginPc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryRegionListHttpRsp
 */
exports.QueryRegionListHttpRsp = new QueryRegionListHttpRsp$Type();
