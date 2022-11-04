"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCurrRegionHttpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const StopServerInfo_1 = require("./StopServerInfo");
const ForceUpdateInfo_1 = require("./ForceUpdateInfo");
const RegionInfo_1 = require("./RegionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QueryCurrRegionHttpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryCurrRegionHttpRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "msg", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "region_info", kind: "message", T: () => RegionInfo_1.RegionInfo },
            { no: 11, name: "client_secret_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "region_custom_config_encrypted", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "client_region_custom_config_encrypted", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "force_update", kind: "message", oneof: "detail", T: () => ForceUpdateInfo_1.ForceUpdateInfo },
            { no: 5, name: "stop_server", kind: "message", oneof: "detail", T: () => StopServerInfo_1.StopServerInfo }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
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
                case /* optional string msg */ 2:
                    message.msg = reader.string();
                    break;
                case /* optional com.midnights.game.RegionInfo region_info */ 3:
                    message.regionInfo = RegionInfo_1.RegionInfo.internalBinaryRead(reader, reader.uint32(), options, message.regionInfo);
                    break;
                case /* optional bytes client_secret_key */ 11:
                    message.clientSecretKey = reader.bytes();
                    break;
                case /* optional bytes region_custom_config_encrypted */ 12:
                    message.regionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* optional bytes client_region_custom_config_encrypted */ 13:
                    message.clientRegionCustomConfigEncrypted = reader.bytes();
                    break;
                case /* com.midnights.game.ForceUpdateInfo force_update */ 4:
                    message.detail = {
                        oneofKind: "forceUpdate",
                        forceUpdate: ForceUpdateInfo_1.ForceUpdateInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.forceUpdate)
                    };
                    break;
                case /* com.midnights.game.StopServerInfo stop_server */ 5:
                    message.detail = {
                        oneofKind: "stopServer",
                        stopServer: StopServerInfo_1.StopServerInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.stopServer)
                    };
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
        /* optional string msg = 2; */
        if (message.msg !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.msg);
        /* optional com.midnights.game.RegionInfo region_info = 3; */
        if (message.regionInfo)
            RegionInfo_1.RegionInfo.internalBinaryWrite(message.regionInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bytes client_secret_key = 11; */
        if (message.clientSecretKey !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).bytes(message.clientSecretKey);
        /* optional bytes region_custom_config_encrypted = 12; */
        if (message.regionCustomConfigEncrypted !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).bytes(message.regionCustomConfigEncrypted);
        /* optional bytes client_region_custom_config_encrypted = 13; */
        if (message.clientRegionCustomConfigEncrypted !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).bytes(message.clientRegionCustomConfigEncrypted);
        /* com.midnights.game.ForceUpdateInfo force_update = 4; */
        if (message.detail.oneofKind === "forceUpdate")
            ForceUpdateInfo_1.ForceUpdateInfo.internalBinaryWrite(message.detail.forceUpdate, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.StopServerInfo stop_server = 5; */
        if (message.detail.oneofKind === "stopServer")
            StopServerInfo_1.StopServerInfo.internalBinaryWrite(message.detail.stopServer, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryCurrRegionHttpRsp
 */
exports.QueryCurrRegionHttpRsp = new QueryCurrRegionHttpRsp$Type();